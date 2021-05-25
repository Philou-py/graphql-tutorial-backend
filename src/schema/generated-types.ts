export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthorType = {
  __typename?: 'AuthorType';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  books?: Maybe<Array<BookType>>;
};

export type BookType = {
  __typename?: 'BookType';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  genre?: Maybe<Scalars['String']>;
  author?: Maybe<AuthorType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthor?: Maybe<AuthorType>;
};


export type MutationAddAuthorArgs = {
  name?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  book?: Maybe<BookType>;
  books?: Maybe<Array<BookType>>;
  author?: Maybe<AuthorType>;
  authors?: Maybe<Array<AuthorType>>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};


export type QueryAuthorArgs = {
  id: Scalars['ID'];
};
