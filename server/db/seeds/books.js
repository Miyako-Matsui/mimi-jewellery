exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('books')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('books').insert([
        {
          id: 1,
          title: 'Wuthering Heights',
          author: 'Emily Brontë',
          genre: 'Tragedy, gothic',
          img: 'https://2.bp.blogspot.com/-th5vho-oljI/Vwv6WEZG6gI/AAAAAAAADmk/PCfb1nKo1QswhzXwxKLCRjDfMmAxy7SzA/s1600/bookcover.jpg',
          year: 1847,
        },
        {
          id: 2,
          title: 'Project Hail Mary',
          author: 'Andy Weir',
          genre: 'Science fiction',
          img: 'https://upload.wikimedia.org/wikipedia/en/a/ad/Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg',
          year: 2021,
        },
        {
          id: 3,
          title: 'The Haunting',
          author: 'Margaret Mahy',
          genre: 'Children\'s supernatural fiction, ghost story',
          img: 'https://upload.wikimedia.org/wikipedia/en/a/a6/The_Haunting_cover.jpg?20140509155713',
          year: 1982,
        },
        {
          id: 4,
          title: 'Queenie',
          author: 'Candice Carty-Williams',
          genre: 'New adult fiction',
          img: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Queenie_%28novel%29.jpg',
          year: 2019
        },
        {
          id: 5,
          title: 'A Hero\'s Quest',
          author: 'David Grimstone',
          genre: 'Childrens, Action, Historical Fiction',
          img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1340053780i/6465875.jpg',
          year: 2009
        },
      ])
    })
}
