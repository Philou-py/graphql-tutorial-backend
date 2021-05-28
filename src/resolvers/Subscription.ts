import AuthorDocument from "../interfaces/Author";
import BookDocument from "../interfaces/Book";
import ResolverContext from "../interfaces/ResolverContext";

export default {
  newAuthor: {
    subscribe: (parent: undefined, args: undefined, context: ResolverContext) => {
      return context.pubsub.asyncIterator("NEW_AUTHOR");
    },
    resolve: (payload: AuthorDocument) => payload,
  },

  newBook: {
    subscribe: (parent: undefined, args: undefined, context: ResolverContext) => {
      return context.pubsub.asyncIterator("NEW_BOOK");
    },
    resolve: (payload: BookDocument) => payload,
  },
};
