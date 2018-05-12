FROM node:10.0.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json

RUN npm install

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .
ENV PORT 7777
EXPOSE 7777
CMD [ "node" , "./index.js" ]