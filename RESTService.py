from flask import Flask, request, jsonify
import json
import base64
from PIL import Image
from io import BytesIO
import subprocess
from CBIR import final
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/buscarImagen', methods=['POST'])
def post():
    print('Comenzando proceso de recuperación de imagenes...');
    req_data = request.get_json()
    strImg = req_data['base64img']    
    strImg = strImg.replace('data:image/jpeg;base64,','')
    im = Image.open(BytesIO(base64.b64decode(strImg)))
    im.save('imgHongo.jpg', 'JPEG')
    print('Imagen guardada...')
    resul = final()
    return jsonify({"mensaje":"Tipo de hongo","val":resul})

if __name__ == '__main__':
     app.run(port=5002)
