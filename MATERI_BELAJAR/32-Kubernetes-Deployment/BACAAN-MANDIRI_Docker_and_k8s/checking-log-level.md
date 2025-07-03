# Checking Log Level Used

## Command

```bash
ps aux | grep '[d]ockerd.*--log-level' | awk '{for(i=1;i<=NF;i++) if ($i ~ /--log-level/) print $i}'
```

## Explanation

This Bash command is used to find the `--log-level` argument being passed to the `dockerd` process (Docker daemon). Let's break it down step by step:

### 1. `ps aux`

- Lists all running processes on the system with detailed information.

### 2. `grep '[d]ockerd.*--log-level'`

- Searches for the `dockerd` process with a `--log-level` argument.
- The `[d]` trick is used to avoid matching the `grep` command itself in the process list.
- `.*` matches any characters between `dockerd` and `--log-level`.

### 3. `awk '{for(i=1;i<=NF;i++) if ($i ~ /--log-level/) print $i}'`

- Processes each line of output from `grep`.
- `NF` is the number of fields (columns) in the current line.
- The loop checks each field (`$i`) for a match with `--log-level`.
- If found, it prints that specific field (which would be `--log-level=debug`, `--log-level=info`, etc.).

### Example Output

If `dockerd` is running with `--log-level=debug`, the command would output:

```bash
--log-level=debug
```

### Purpose

This command helps in checking the current log level configuration of the Docker daemon, which is useful for debugging or verifying runtime settings.
