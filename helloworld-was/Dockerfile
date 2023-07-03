# 사용할 이미지 지정
FROM node:18-alpine
ENV NODE_ENV=production 

# 이미지 안에 애플리케이션 코드를 넣기 위한 디렉토리 설정
WORKDIR /app

# 이 이미지에는 이미 Node.js와 NPM이 설치되어 있으므로 npm 바이너리로 앱의 의존성을 설치하기만 하면 됨
# 앱 의존성 설치
# 가능한 경우(npm@5+) package.json과 package-lock.json을 모두 복사하기 위해 와일드카드를 사용
COPY ["package.json", "package-lock.json*", "./"]

# 현재는 개발 목적으로 빌드
RUN npm install --production
# 프로덕션을 위한 코드를 빌드하는 경우 : RUN npm ci --omit=dev

# 도커 이미지 안에 앱의 소스 코드를 추가
COPY . .

# 앱이 바인딩 되어 있는 포트와 docker 데몬 매핑
#EXPOSE 3000

# 런타임을 정의하는 CMD로 앱 실행 명령어를 정의(서버를 구동하도록 node app.js을 실행하는 기본 npm start을 사용)
# CMD [ "node", "server.js" ]
CMD npm start

