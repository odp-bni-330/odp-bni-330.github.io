-- Buat tabel User
CREATE TABLE users (
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

-- Buat tipe data account_type
CREATE TYPE account_type AS ENUM ('personal','business');

-- Buat tipe data account_status
CREATE TYPE account_status AS ENUM ('active','frozen','closed');

-- buat tabel account
CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    account_number VARCHAR(30) UNIQUE NOT NULL,
    account_type account_type DEFAULT 'personal',
    balance NUMERIC(15, 2) DEFAULT 0.00,            -- maksimal 15 digit, 2 angka di belakang koma (precision)
    account_status account_status DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);

-- buat tipe data mutation_tuype
CREATE TYPE mutation_type AS ENUM ('credit','debit');

-- buat tabel mutations
CREATE TABLE mutations (
    id SERIAL PRIMARY KEY,
    account_id INTEGER NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,
    mutation_type mutation_type NOT NULL,   -- ENUM : 'credit' / 'debit'
    amount NUMERIC(15,2) NOT NULL CHECK (amount > 0),
    description TEXT,
    reference_code VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- memasukkan elemen ke tabel users
INSERT INTO users (full_name, date_of_birth, address, email, phone_number)
VALUES
('Abdul Jabar 3','1990-02-15','Jakarta','AbdulJabar6@gmail.com','089123252343');

-- memasukkan elemen ke tabel accounts
INSERT INTO accounts(user_id,account_number,account_type, balance, account_status)
VALUES
(1, 'ACC00005','personal',15000.00,'active'),
(3, 'ACC00006','personal',15000.00,'active');
(3, 'ACC00003','personal',15000.00,'active');
(3, 'ACC00004','personal',15000.00,'active');

-- menampilkan 3 elemen di users
SELECT * FROM users LIMIT 3;

SELECT * FROM accounts;

-- hapus elemen dari tabel accounts
DELETE FROM accounts WHERE account_number = 'ACC00002'

-- Update elemen database
UPDATE users
SET
    full_name = 'Abdul Jabar Baru',
    address = 'Bekasi'
WHERE id=100;