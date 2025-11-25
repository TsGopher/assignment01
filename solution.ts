type FormatValue = string | number | boolean;

const formatValue = (input: FormatValue): FormatValue => {
  switch (typeof input) {
    case "string":
      return input.toUpperCase();

    case "number":
      return input * 10;

    case "boolean":
      return !input;

    default:
      const _exhaustive: never = input;
      return _exhaustive;
  }
};

const getLength = (input: string | Array<any>): number => {
  return input.length;
};

class Person {
  constructor(readonly name: string, readonly age: number) {}

  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};

interface IActiveUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const filterActiveUsers = (userArr: IActiveUser[]): IActiveUser[] => {
  return userArr.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
  const availability = book.isAvailable ? "Yes" : "No";
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const itemPrice = product.price * product.quantity;
    const discount = product.discount ?? 0;
    const discountedPrice = itemPrice * (1 - discount / 100);
    return total + discountedPrice;
  }, 0);
};
