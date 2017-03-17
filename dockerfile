#change this to your own repo, should you have uploaded your image!
FROM  quasarframework/client-dev:latest

MAINTAINER EPFL Dojo <dojo-app@epfl.ch>

WORKDIR /opt/app

COPY package.json /opt/app/
RUN npm install

COPY . /opt/app

EXPOSE 8080

CMD /bin/sh
