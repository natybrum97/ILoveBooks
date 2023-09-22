import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database";

export async function getBooks() {

  const resultado = await prisma.books.findMany();
  return resultado;

}

export async function getBook(id: number) {
  const resultado = await prisma.books.findUnique({
    where: {
      id
    }
  })
  return resultado;
}

export async function createBook(book: CreateBook) {

  const resultado = await prisma.books.create({
    data: book
  })

  return resultado;
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review, cover } = bookReview;

  const resultado = await prisma.books.update({
    data: {
      grade, review, read: true, cover
    },
    where:{
      id: bookId
    }
  })

  return resultado;
}