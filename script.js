
const booksPerPage = 9;
let currentPage = 1;
		let books = [
			{ title: "Book 1", author: "Author 1", subject: "Subject 1", publishDate: "2022-01-01" },
			{ title: "Book 2", author: "Author 2", subject: "Subject 1", publishDate: "2022-02-01" },
			{ title: "Book 3", author: "Author 1", subject: "Subject 2", publishDate: "2022-03-01" },
			{ title: "Book 4", author: "Author 3", subject: "Subject 2", publishDate: "2022-04-01" },
			{ title: "Book 5", author: "Author 2", subject: "Subject 3", publishDate: "2022-05-01" },
			{ title: "Book 6", author: "Author 1", subject: "Subject 3", publishDate: "2022-06-01" },
			{ title: "Book 7", author: "Author 3", subject: "Subject 4", publishDate: "2022-07-01" },
			{ title: "Book 8", author: "Author 4", subject: "Subject 4", publishDate: "2022-08-01" },
			{ title: "Book 9", author: "Author 5", subject: "Subject 5", publishDate: "2022-09-01" },
        ]
        function filterBooks() {
            const searchTitle = document.getElementById("search-title").value.trim().toLowerCase();
            const searchAuthor = document.getElementById("search-author").value.trim().toLowerCase();
            const searchSubject = document.getElementById("search-subject").value.trim().toLowerCase();
            const searchPublishDate = document.getElementById("search-publish-date").value;
          
            let filteredBooks = books.filter(book => {
              let titleMatch = true;
              let authorMatch = true;
              let subjectMatch = true;
              let publishDateMatch = true;
          
              if (searchTitle !== "") {
                titleMatch = book.title.toLowerCase().includes(searchTitle);
              }
          
              if (searchAuthor !== "") {
                authorMatch = book.author.toLowerCase().includes(searchAuthor);
              }
          
              if (searchSubject !== "") {
                subjectMatch = book.subject.toLowerCase().includes(searchSubject);
              }
          
              if (searchPublishDate !== "") {
                publishDateMatch = book.publishDate === searchPublishDate;
              }
          
              return titleMatch && authorMatch && subjectMatch && publishDateMatch;
            });
          
            renderBooks(filteredBooks);
            updateBookCounts(filteredBooks);
          }
          
          function renderBooks(booksToRender) {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
          
            for (let i = 0; i < booksToRender.length; i++) {
              const book = booksToRender[i];
              const row = document.createElement('tr');
          
              const titleCell = document.createElement('td');
              titleCell.textContent = book.title;
              row.appendChild(titleCell);
          
              const authorCell = document.createElement('td');
              authorCell.textContent = book.author;
              row.appendChild(authorCell);
          
              const subjectCell = document.createElement('td');
              subjectCell.textContent = book.subject;
              row.appendChild(subjectCell);
          
              const publishDateCell = document.createElement('td');
              publishDateCell.textContent = book.publishDate;
              row.appendChild(publishDateCell);
          
              bookList.appendChild(row);
            }
          
            renderPagination(booksToRender);
          }
          
          function updateBookCounts(books) {
            const titleCount = document.getElementById('count-title');
            const authorCount = document.getElementById('count-author');
            const subjectCount = document.getElementById('count-subject');
            const publishDateCount = document.getElementById('count-publish-date');
          
            const titleSet = new Set();
            const authorSet = new Set();
            const subjectSet = new Set();
            const publishDateSet = new Set();
          
            for (let i = 0; i < books.length; i++) {
              const book = books[i];
          
              titleSet.add(book.title);
              authorSet.add(book.author);
              subjectSet.add(book.subject);
              publishDateSet.add(book.publishDate);
            }
          
            titleCount.textContent = titleSet.size;
            authorCount.textContent = authorSet.size;
            subjectCount.textContent = subjectSet.size;
            publishDateCount.textContent = publishDateSet.size;
          }
          