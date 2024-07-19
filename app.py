from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# configuración de la base de datos
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://  
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:Sigmata@localhost:3306/piletas'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Definir la tabla 
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    usuario=db.Column(db.String(50))
    contrasenia=db.Column(db.String(400))
    
 #crea el  constructor de la clase
def __init__(self,usuario,contrasenia):  
        self.usuario=usuario 
        self.contrasenia = contrasenia

        
           
# 8. Crear la tabla al ejecutarse la app
with app.app_context():
    db.create_all()

# Crear ruta de acceso
# / es la ruta de inicio
@app.route("/")
def index():
    return f'App Web para registrar productos'

# Crear un registro en la tabla Productos
@app.route("/registro", methods=['POST']) 
def registro():
    nombre = request.json["name"]
    contrasenia=request.json['password']
    nuevo_registro = User(nombre = nombre, contrasenia=contrasenia)
    db.session.add(nuevo_registro)
    db.session.commit()

    return "Solicitud de post recibida"


 # Retornar todos los registros en un Json
@app.route("/users",  methods=['GET'])
def productos():
    # Consultar en la tabla todos los registros
    # all_registros -> lista de objetos
    all_registros = User.query.all()

    # Lista de diccionarios
    data_serializada = []
    
    for objeto in all_registros:
        data_serializada.append({"id":objeto.id, "name":objeto.nombre, "password":objeto.contrasenia})

    return jsonify(data_serializada)
   

# Ruta para actualizar un producto por su ID
@app.route('/update/<int:id>', methods=['PUT'])
def update_user(id):
    try:
        # Obtener el producto por su ID
        usuario = User.query.get(id)

        if not User:
            return jsonify({"error": "Producto no encontrado"}), 404

        # Actualizar los atributos del producto con los datos recibidos
        data = request.json
        usuario.nombre = data.get("name", usuario.nombre)
        usuario.contrasenia = data.get("password", usuario.contrasenia)
        

        # Guardar los cambios en la base de datos
        db.session.commit()

        # Preparar la respuesta JSON con los datos actualizados
        data_serializada = {
            "id": usuario.id,
            "name": usuario.nombre,
            "password": usuario.contrasenia
           
        }
        
        return jsonify(data_serializada), 200
    
    except Exception as e:
        # Manejar cualquier error que pueda ocurrir
        return jsonify({"error": str(e)}), 500

   
@app.route('/borrar/<id>', methods=['DELETE'])
def borrar(id):
    
    # Se busca a la productos por id en la DB
    usuarios = User.query.get(id)

    # Se elimina de la DB
    db.session.delete(usuarios)
    db.session.commit()

    data_serializada = [{"id":usuarios.id, "nombre":usuarios.name, "password":usuarios.contrasenia}]

    return jsonify(data_serializada)


if __name__ == "__main__":
    app.run(debug=True, use_debugger=False, use_reloader=False)


