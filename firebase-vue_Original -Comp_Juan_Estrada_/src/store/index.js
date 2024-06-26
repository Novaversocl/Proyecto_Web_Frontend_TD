// Store: store/index.js
import { createStore } from 'vuex'; // Importa la función createStore de Vuex
import { db } from '../config/firebase.config.js'; // Importa la configuración de Firebase
import { collection, doc, getDoc, getDocs, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'; // Importa funciones de Firestore

export default createStore({
  state: {
    books: [], // Arreglo que contendrá todos los libros
    currentBookId: null // ID del libro actualmente seleccionado
  },
  getters: {
    getBooks(state) { // Getter para obtener todos los libros del estado
      return state.books;
    }
  },
  mutations: {
    // Mutación para establecer la lista completa de libros en el estado
    setBooks(state, books) {
      state.books = books;
    },
    // Mutación para establecer el ID del libro actualmente seleccionado
    setCurrentBookId(state, bookId) {
      state.currentBookId = bookId;
    },
    // Mutación para agregar un nuevo libro al estado
    addBook(state, book) {
      state.books.push(book);
    },
    // Mutación para eliminar un libro del estado
    deleteBook(state, bookID) {
      state.books = state.books.filter(book => book.id !== bookID);
    },
    // Mutación para actualizar un libro en el estado
    updateBook(state, updatedBook) {
      const index = state.books.findIndex(book => book.id === updatedBook.id);
      if (index !== -1) {
        state.books.splice(index, 1, updatedBook);
      }
    }
  },
  actions: {
    // Acción para obtener todos los libros de Firestore y actualizar el estado
    async fetchBooks({ commit }) {
      try {
        const booksRefCollection = collection(db, 'libros');
        const booksDocs = await getDocs(booksRefCollection);

        // Mapea los documentos de Firestore a objetos de libro con su ID
        const books = booksDocs.docs.map(bookDoc => ({
          id: bookDoc.id,
          ...bookDoc.data()
        }));

        commit('setBooks', books); // Llama a la mutación setBooks para actualizar el estado con los libros obtenidos
      } catch (error) {
        console.error(error);
      }
    },

    // Acción para obtener un libro específico por su ID de Firestore y establecerlo como el libro actual
    async fetchBookById({ commit }, bookId) {
      try {
        const bookRef = doc(db, 'libros', bookId);
        const bookSnapshot = await getDoc(bookRef);
        if (bookSnapshot.exists()) {
          commit('setCurrentBookId', bookId); // Llama a la mutación setCurrentBookId para establecer el ID del libro actual
        } else {
          console.error('No se encontró el libro');
        }
      } catch (error) {
        console.error('Error al obtener el libro:', error);
      }
    },

    // Acción para agregar un nuevo libro a Firestore y actualizar el estado con el nuevo libro
    async addBook({ commit }, newBook) {
      try {
        const booksRefCollection = collection(db, 'libros');
        const bookRef = await addDoc(booksRefCollection, newBook);

        commit('addBook', { id: bookRef.id, ...newBook }); // Llama a la mutación addBook para agregar el libro al estado
      } catch (error) {
        console.error('Error al crear un libro', error);
      }
    },

    // Acción para eliminar un libro de Firestore y actualizar el estado eliminando el libro correspondiente
    async deleteBook({ commit }, bookID) {
      try {
        await deleteDoc(doc(db, 'libros', bookID));
        commit('deleteBook', bookID); // Llama a la mutación deleteBook para eliminar el libro del estado
      } catch (error) {
        console.error('No pudimos eliminar el libro', error);
      }
    },

    // Acción para actualizar un libro en Firestore y actualizar el estado con el libro actualizado
    async updateBook({ commit }, updatedBook) {
      try {
        const { id, ...bookToUpdate } = updatedBook;
        const bookRef = doc(db, 'libros', id);
        await updateDoc(bookRef, bookToUpdate);

        commit('updateBook', updatedBook); // Llama a la mutación updateBook para actualizar el libro en el estado
      } catch (error) {
        console.error('Error al actualizar el libro', error);
      }
    }
  }
});
