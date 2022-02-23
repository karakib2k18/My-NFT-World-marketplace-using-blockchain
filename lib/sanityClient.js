import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'scfnnrj3',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: 'skOCLdgeQg3K7SbmhqW8a9RoyUGuqP8TcYGvMGTIeZTbycRdqKIW9ufifQlgZfqlPFckoXlVrFC5dQ2ECjcYpX5nngmz47m5oyE2QJ31SHeFrtGymeDz8my5N9J7ktU8TgT58Nvd0jkBayHQ89mpfwuauX5St7rTkL0zGLFG0kH7d0vZ5Jlx', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})