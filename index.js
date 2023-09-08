class Version {
  constructor(major, minor, patch) {
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  increment() {
    this.patch++;
  }

  appendText(text) {
    this.text = text;
  }

  getVersion() {
    return `${this.major}.${this.minor}.${this.patch}`;
  }

  getFullVersion() {
    return `${this.major}.${this.minor}.${this.patch} ${this.text}`;
  }
}

// Пример использования класса Version
const version = new Version(1, 2, 3);

// Выводим текущую версию
console.log(version.getVersion()); // Выведет: 1.2.3

// Инкрементируем версию
version.increment();

// Выводим новую версию
console.log(version.getVersion()); // Выведет: 1.2.4

// Добавляем текст
version.appendText('Some additional information');

// Выводим полную версию с текстом
console.log(version.getFullVersion()); // Выведет: 1.2.4 Some additional information
