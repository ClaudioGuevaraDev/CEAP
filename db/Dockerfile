FROM postgres:14.2

ENV POSTGRES_PASSWORD=password
ENV POSTGRES_USER=user
ENV POSTGRES_DB=ceap

COPY backup.sql /docker-entrypoint-initdb.d/backup.sql