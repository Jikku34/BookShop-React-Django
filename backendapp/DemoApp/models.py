from django.db import models

class BookModel(models.Model):
    """
    Model representing a book.

    Attributes:
        book_id (AutoField): The primary key for the book.
        book_name (CharField): The name of the book.
        book_price (IntegerField): The price of the book.
        book_description (TextField): The description of the book.
        book_image (ImageField): The image of the book.
            Uploaded to the 'images/' directory.

    Example Usage:
        To create a new book instance:

        ```
        book = BookModel(book_name='Example Book', book_price=10, book_description='An example book description')
        book.save()
        ```

    """
    book_id = models.AutoField(primary_key=True)
    book_name = models.CharField(max_length=50)
    book_price = models.IntegerField()
    book_description = models.TextField()
    book_image = models.ImageField(upload_to='images/', null=True)
