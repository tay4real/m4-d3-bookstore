<ol>
      <li>
        Create a component called WarningSign which receives a text as a prop.
        This text should be presented inside an Alert of type danger
      </li>
      <li>
        Create a component called MyBadge which receives a text and a color as
        props. This component should render a Badge react-bootstrap component
        with those properties.
      </li>
      <li>
        Create a SingleBook component as a function. The component receives a
        book object as a prop, and displays the cover and the title of the book.
        Use react-bootstrap Cards to display a book (The book object can be read
        from the one of the .json book files we gave you yesterday)
      </li>
      <li>
        Create a BookList component. This component receives by props a list of
        books and displays them using the SingleBook component
      </li>
      <li>
        Create a FilterBookList feature. By writing into an input field a search
        query, the BookList should show only the books with the specified string
        into the title (save the query into the BookList component state and
        filter the books accordingly).
      </li>
      <li>
        Convert your SingleBook component to a class, and create its state
        containing a 'selected' boolean property.
      </li>
      <li>
        Clicking on a SingleBook should toggle its 'selected' state property. If
        the 'selected' property is true, the SingleBook should have some styling
        resembling it.
      </li>
      <li>Publish everything on GitHub (for both)</li>
    </ol>

    <h2>Improve your Bookstore!</h2>

    <h4>In this exercise you are gonna update your own book store!</h4>

    <h4>
      Start from your previous React Bookstore. We want you to add the functionality to add comments to a single book.
      All the users can add comments like a "real" review :)
    </h4>

    <pre>
      <code>
        API INFO:

        You have a CRUD endpoint for comments on:

        https://striveschool-api.herokuapp.com/api/comments/

        This means you can GET, DELETE, POST, PUT data from there.

        The Comment structure is this:

        {
          "comment": "A good book but definitely I don't like many parts of the plot",
          "rate": 3,
          "elementId": "0316438960"
        }

        Where:
        - comment is the comment inserted by the user
        - rate is a value between 1 and 5
        - elementId is the ASIN of the book
        - use usual Authentication (we made some modifications, so please re-log in on https://strive.school/studentlogin to grab a new token)

        !IMPORTANT!
        You can't get ALL the comments. You have to specify the ElementID / ASIN in the query:

        https://striveschool-api.herokuapp.com/api/comments/{ASIN}

        Doing so, you'll get all the comments for a specific book

      </code>
    </pre>

    <ol>
      <li>Create a CommentArea component. When the user clicks a book, this component should be displayed.</li>
      <li>CommentArea component contains the picture, and two subcomponents: CommentsList and AddComment.</li>
      <li>
        CommentsList holds a list of comments of the selected book, comments are passed as prop. Each comment is a
        single Comment component.
      </li>
      <li>
        AddComment contains a form to add a comment and a rating (1 to 5). This component should allow the user to POST
        a new Comment on the selected Book
      </li>
      <li>
        Add, to each "Comment", a button to DELETE it. Create a request towards
        https://striveschool-api.herokuapp.com/api/comments/{comment id}
      </li>
      <li>
        Create a Loading component. This loading component should appear on the page when an ajax request is ongoing
      </li>
      <li>Create an error handler for the requests. If something goes wrong, an error message should appear!</li>
      <li>Publish everything on GitHub</li>

      <!-- EXTRA -->
      <li>
        Add to "CommentList" component the capability to filter comments using a text box. The Filter will display only
        comments that contains as comment or as author the specified string
      </li>
    </ol>