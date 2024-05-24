"""
URL patterns for book-related API endpoints.

Includes the following URL patterns:

1. `/allbook`: 
    - Endpoint for retrieving a list of all books.
    - HTTP method: GET

2. `/book/<int:book_id>`:
    - Endpoint for retrieving details of a specific book by its ID.
    - Requires the book ID as a parameter in the URL.
    - HTTP method: GET

3. `/book_delete/<int:book_id>`:
    - Endpoint for deleting a specific book by its ID.
    - Requires the book ID as a parameter in the URL.
    - HTTP method: DELETE

4. `/addbook`:
    - Endpoint for adding a new book.
    - HTTP method: POST

5. `/updatebook/<int:book_id>`:
    - Endpoint for updating details of a specific book by its ID.
    - Requires the book ID as a parameter in the URL.
    - HTTP method: PUT
"""

from django.urls import path
from . import views

urlpatterns = [
    path('allbook', views.book_list, name='all_book'),
    path("book/<int:book_id>", views.book_by_id, name='book_by_id'),
    path('book_delete/<int:book_id>', views.book_delete_by_id, name='book_delete_by_id'),
    path('addbook', views.book_create, name='add_book'),
    path('updatebook/<int:book_id>', views.update_book, name='update_book'),
]
