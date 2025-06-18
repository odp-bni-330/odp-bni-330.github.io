----------------------- Sub-query -----------------------
-- scalar sub-query
SELECT
    full_name,
    email,
    (SELECT MAX(id) FROM users)
FROM users;

SELECT 
    account_number,
    (SELECT MAX(balance) FROM accounts)
FROM accounts;

-- row sub-query
SELECT
    account_number,
    (SELECT
        id,
        amount
    FROM mutations
    WHERE id = 2)
FROM accounts;
-- will return : sub-query must return only one column


-- CATATAN : untuk temporary table, lakukan dalam satu sesi di psql
-- membuat temporary table
CREATE TEMP TABLE temp_users (
    id SERIAL PRIMARY KEY,          -- SERIAL : fitur auto incremenet ; atur sbg PRIMARY KEY
    full_name VARCHAR(50) NOT NULL,     -- NOT NULL : tidak boleh kosong
    date_of_birth DATE NOT NULL,
    address TEXT,
    email VARCHAR(50) UNIQUE,           -- UNIQUE : harus unik
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP            -- untuk soft delete (apabila ada nilainya, sudah terhapus)
);

-- memasukkan ke temporary table
INSERT INTO temp_users (full_name, date_of_birth, address, email, phone_number)
VALUES
    ('Abdul Kharim','1990-02-15','Jakarta','AbdulKar013@gmail.com','089321252343');

--------------
-- Perbandingan antara sub-query dengan join --

EXPLAIN ANALYSE
SELECT *
FROM users
WHERE id NOT IN
    (SELECT user_id FROM accounts)
ORDER BY id DESC
LIMIT 5;

EXPLAIN ANALYSE
SELECT *
FROM users AS u
LEFT JOIN accounts AS a
    ON a.user_id = u.id
WHERE a.user_id IS NULL
ORDER BY u.id DESC
LIMIT 5;    


CREATE INDEX idx_user_id_accounts ON accounts(user_id);

EXPLAIN ANALYZE
SELECT *
FROM mutations AS m
WHERE m.account_id IN
    (SELECT u.id FROM accounts AS a
    LEFT JOIN users AS u
        ON a.user_id = u.id
    WHERE a.user_id IS NOT NULL);

-- kesimpulan : penggunaan join + index lebih dikehendaki

------------------

----- WINDOW FUNCTION ----- 
-- RANK
SELECT
    RANK() OVER(
        ORDER BY balance DESC
    ) AS rank_balance,
    account_number,
    balance
FROM accounts;

-- DENSE RANK
SELECT
    DENSE_RANK() OVER(
        ORDER BY balance DESC, id ASC       -- id ASC dibutuhkan untuk case dua id dgn balance sama
    ) AS rank_balance,
    id, 
    account_number,
    balance
FROM accounts
LIMIT 15;

-- NTILE
SELECT
    id,
    account_number,
    balance,
    NTILE(5) OVER (
        ORDER BY balance DESC
    ) AS quartile
FROM (
    SELECT
        id,
        account_number,
        balance
    FROM accounts
    ORDER BY balance DESC
    LIMIT 19
) AS top_19;

-- Contoh query kombinasi
SELECT
    id,
    account_number,
    account_type,
    balance,
    AVG(balance) OVER(
        PARTITION BY account_type
    ) AS avg_balance_per_type,
    RANK() OVER(
        PARTITION BY account_type
        ORDER BY balance DESC
    ) AS rank_in_type
FROM accounts
LIMIT 20;

-- 

--- LATIHAN 1 : 10 user dgn saldo akun tertinggi dan rakingnya ---
SELECT
    u.id,
    u.full_name,
    a.balance,
    RANK() OVER(
        ORDER BY balance DESC
    ) AS rank_balance
FROM users AS u
JOIN accounts AS a
    ON u.id = a.user_id
-- ORDER BY balance DESC    -- tdk berpengaruh
LIMIT 10;

--- LATIHAN 2 : mengelompokkan akun ke 5 grup bdskan saldo (tinggi ke rendah) u/ akun dgn saldo > 1 jt---
-- + maksimum saldo dari maksimal tipe akun --
SELECT
    id,
    account_number,
    balance,
    NTILE(5) OVER(
        ORDER BY balance DESC
    ) AS saldo_group,
    account_type,
    MAX(balance) OVER(                  -- + maksimum saldo dari maksial tipe akun
        PARTITION BY account_type
    ) AS max_account_type,
    RANK() OVER(

    )
FROM accounts
WHERE balance > 1000000;

--- LATIHAN 3 : Gunakan DENSE_RANK() u/ peringkat user bdskan jumlah total akun yg dimiliki ---

SELECT
    u.id,
    u.full_name,
    COUNT(a.id) AS count_account,
    -- JUMLAH AKUN FROZEN
    (SELECT
        COUNT(account_type)
    FROM accounts
    WHERE status = 'frozen' AND user_id = u.id)
    AS jml_frozen,
    -- JUMLAH AKUN AKTIF
    (SELECT
        COUNT(account_type)
    FROM accounts
    WHERE status = 'active' AND user_id = u.id)
    AS jml_aktif,
    -- JUMLAH AKUN TUTUP
    (SELECT
        COUNT(account_type)
    FROM accounts
    WHERE status = 'closed' AND user_id = u.id)
    AS jml_closed,
    -- -- RANK BERDASARKAN JUMLAH AKUN
    -- DENSE_RANK() OVER(
    --     ORDER BY COUNT(a.user_id) DESC
    -- ) AS rank,
    -- RANK BERDASARKAN TOTAL SALDO
    SUM(a.balance) AS total_saldo,
    DENSE_RANK() OVER(
        ORDER BY SUM(a.balance) DESC
    ) AS rank
FROM users AS u
JOIN accounts AS a
    ON u.id = a.user_id
GROUP BY u.id;
-- ORDER BY count_account DESC;

-- Transfer saldo dari akun `ACC10001` ke `AC10002` sesbesar `10000`
----- TANPA MENGGUNAKAN TRANSACTION ----- 
-- step 0 : Mengetahui saldo awal
SELECT account_number, balance
FROM accounts
WHERE
    account_number IN ('ACC10001','ACC10002');
    -- output :
        -- ACC10001 : Rp1.500.000
        -- ACC10002 : Rp3.000.000
-- KASUS BERHASIL
-- Step 1 : Kurangi saldo pengirim
UPDATE accounts
SET balance = balance - 10000
WHERE account_number = 'ACC10001';

-- Step 2 : Tambah saldo penerima
UPDATE accounts
SET balance = balance + 10000
WHERE account_number = 'ACC10002';

-- KASUS GAGAL (karena nomor akun tidak ada)
-- Step 1 : Kurangi saldo pengirim
UPDATE accounts
SET balance = balance - 10000
WHERE account_number = 'ACC10001';

-- Step 2 : Tambah saldo penerima
UPDATE accounts
SET balance = balance + 10000
WHERE account_number = 'ACC1000X';


----- MENGGUNAKAN TRANSACTION ----- 
BEGIN;

- KASUS BERHASIL
-- Step 1 : K urangi saldo pengirim
UPDATE accounts
SET balance = balance - 10000
WHERE account_number = 'ACC10001';

-- Step 2 : Tambah saldo penerima
UPDATE accounts
SET balance = balance + 10000
WHERE account_number = 'ACC10002';

-- KASUS GAGAL (karena nomor akun tidak ada)
-- Step 1 : Kurangi saldo pengirim
UPDATE accounts
SET balance = balance - 10000
WHERE account_number = 'ACC10001';

-- Step 2 : Tambah saldo penerima
UPDATE accounts
SET balance = balance + 10000
WHERE account_number = 'ACC1000X';


-- dilakukan ketika semua berhasil
COMMIT;

-- Ini tidak dijalankan ketika semua berhasil
ROLLBACK;

-----------------

DO $$
DECLARE
  sender_acc VARCHAR := 'ACC10001';
  receiver_acc VARCHAR := 'ACC10002';
  transfer_amount NUMERIC := 100000;
  updated_rows INT;
BEGIN
  BEGIN
    RAISE NOTICE 'Mulai transfer dari % ke %', sender_acc, receiver_acc;

    -- Kurangi saldo pengirim
    UPDATE accounts
    SET balance = balance - transfer_amount
    WHERE account_number = sender_acc;
    GET DIAGNOSTICS updated_rows = ROW_COUNT;
    IF updated_rows = 0 THEN
      RAISE EXCEPTION 'Akun pengirim tidak ditemukan!';
    END IF;
    RAISE NOTICE 'Saldo pengirim dikurangi.';

    -- Tambah saldo penerima
    UPDATE accounts
    SET balance = balance + transfer_amount
    WHERE account_number = receiver_acc;
    GET DIAGNOSTICS updated_rows = ROW_COUNT;
    IF updated_rows = 0 THEN
      RAISE EXCEPTION 'Akun penerima tidak ditemukan!';
    END IF;
    RAISE NOTICE 'Saldo penerima ditambahkan.';

    RAISE NOTICE '✅ Transfer berhasil.';
    
  EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE '❌ Terjadi error, transaksi dibatalkan: %', SQLERRM;
    -- rollback otomatis dalam DO block
  END;
END $$;

