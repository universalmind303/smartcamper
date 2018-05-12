FROM node:10.0.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm i -g yarn
RUN npm i -g react-native-scripts

RUN yarn
# If you are building your code for production
# RUN npm install --only=production


# Bundle app source
COPY . .
CMD [ "react-native-scripts", "start" ]