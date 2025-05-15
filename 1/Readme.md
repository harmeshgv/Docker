### ✅ Corrected Version of the Question:

> A web development team wants to set up a WordPress website using Docker Compose. The deployment should include:
>
> - A WordPress container with `WORDPRESS_DB_HOST`, `WORDPRESS_DB_USER`, and `WORDPRESS_DB_PASSWORD` set as environment variables.
> - A MySQL database container to store WordPress data, with a persistent volume to retain the database files.
> - A custom network to enable communication between WordPress and MySQL.
>
> **Task:**
> Write a `docker-compose.yml` file to deploy WordPress and MySQL with persistent volumes and a custom network.
> Provide the command to start and verify the deployment.

---

### ✅ Answer:

#### `docker-compose.yml`

```yaml
version: "3.8"

services:
  db:
    image: mysql:5.7
    container_name: mysql_db
    restart: always
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: wp_pass
      MYSQL_ROOT_PASSWORD: root_pass
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - wp_network

  wordpress:
    image: wordpress:latest
    container_name: wordpress_app
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: wp_pass
    ports:
      - "8080:80"
    networks:
      - wp_network
    depends_on:
      - db

volumes:
  db_data:

networks:
  wp_network:
```

---

### ✅ Commands to Deploy and Verify:

1. **Start the Deployment:**

   ```bash
   docker-compose up -d
   ```

2. **Verify the Containers Are Running:**

   ```bash
   docker-compose ps
   ```

3. **Access the WordPress Site:**
   Open your browser and go to: [http://localhost:8070](http://localhost:8080)

4. **Stop the Deployment:**

   ```bash
   docker-compose down
   ```

Let me know if you’d like to add phpMyAdmin to this stack as well.
