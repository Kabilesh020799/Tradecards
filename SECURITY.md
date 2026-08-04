# Credential handling

Runtime database, email, JWT, and Firebase configuration must be supplied through
environment variables. Copy the relevant `.env.example` file for local setup; do
not commit the resulting `.env` file.

Credentials previously committed to this repository must be considered exposed.
Revoke or rotate the database password, Gmail app password, JWT signing secret,
and any Firebase credentials that grant privileged access. Removing values from
the current tree does not remove them from Git history.
