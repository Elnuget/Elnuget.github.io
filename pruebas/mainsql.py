import psycopg2

# establecer los datos de conexión a la base de datos
host = "aws.connect.psdb.cloud"
database = "general"
user = "7rjwxv6fs12l5ht1flb0"
password = "pscale_pw_HLvDn1B85YhEVWAakC8WlCTiClsn2uiFBJPIwz7gcm4"

database: general
username: 7rjwxv6fs12l5ht1flb0
host: aws.connect.psdb.cloud
password: pscale_pw_HLvDn1B85YhEVWAakC8WlCTiClsn2uiFBJPIwz7gcm4


# conectar a la base de datos
conn = psycopg2.connect(host=host, database=database, user=user, password=password)

# crear una tabla
cur = conn.cursor()
cur.execute("CREATE TABLE ejemplo (id serial PRIMARY KEY, descripcion varchar);")
conn.commit()

# cerrar la conexión a la base de datos
cur.close()
conn.close()
