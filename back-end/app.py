# 플라스크 rest-api 생성
from flask import Flask, request
import json
from checkKeyword import textExtract

#from flask_cors import CORS
## 서버 띄우고 접속 허용
app = Flask(__name__)

# 보안관련
#CORS(app)



@app.route("/api/checkKeyword" , methods=["GET","POST"])
# @app.route("/predict", methods=["POST"])
def check():
    data = request.get_json()
    if len(data) == 0:
        data = 'No parameter'
    try:
        url = data['url']
        print(url)
    except:
        print("e")

    result = textExtract.textMining(url)

    return json.dumps(result)

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=5000)  # debug=True causes Restarting with stat