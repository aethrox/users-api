# Node.js'in LTS (Long Term Support) sürümünü temel alan bir Alpine Linux imajı kullanıyoruz.
FROM node:lts-alpine

# Uygulamanın çalışma dizinini belirliyoruz.
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyalıyoruz.
COPY package*.json ./

# NPM ile bağımlılıkları yüklüyoruz.
RUN npm install

# Tüm uygulama dosyalarını konteynere kopyalıyoruz.
COPY . .

# Ortam değişkenlerini ayarlamak için bir .env dosyası kullanılması önerilir.
# ENV MONGO_URI=<your-mongo-uri>

# Uygulamanın dinleyeceği portu açık hale getiriyoruz.
EXPOSE 8080

# Uygulamayı başlatıyoruz.
CMD ["npm", "start"]
