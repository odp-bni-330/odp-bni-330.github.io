# Demo Ansible Web Server Sederhana

## CARA MENJALAKAN

```bash
ansible-playbook -i inventory.ini playbook.yaml --ask-become-pass

# lalu masukkan password root laptop 
```

## CARA MEMBERHENTIKAN

```bash
ansible-playbook -i inventory.ini cleanup.yaml --ask-become-pass
```
