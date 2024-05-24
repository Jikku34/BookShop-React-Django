from .serializers import BookSerializer
from .models import BookModel
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def book_list(request):
    """
    Get a list of all books.

    Returns:
        Response: A JSON response containing a list of all books.
                  Status code 200 (OK) if successful.
    """
    books = BookModel.objects.all()
    book_serializer_obj = BookSerializer(books, many=True)
    return Response(book_serializer_obj.data, status=status.HTTP_200_OK)


@api_view(["GET"])
def book_by_id(request, book_id):
    """
    Get details of a book by its ID.

    Args:
        request: HttpRequest object.
        book_id (int): The ID of the book to retrieve.

    Returns:
        Response: A JSON response containing the details of the book.
                  Status code 200 (OK) if successful, 404 (Not Found) if the book does not exist.
    """
    try:
        book_obj = BookModel.objects.get(book_id=book_id)
        book_serializer_obj = BookSerializer(book_obj, many=False)
        return Response(book_serializer_obj.data, status=status.HTTP_200_OK)
    except BookModel.DoesNotExist:
        return Response({'message': "Book not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["DELETE"])
def book_delete_by_id(request, book_id):
    """
    Delete a book by its ID.

    Args:
        request: HttpRequest object.
        book_id (int): The ID of the book to delete.

    Returns:
        Response: A JSON response indicating the result of the operation.
                  Status code 200 (OK) if successful, 404 (Not Found) if the book does not exist.
    """
    try:
        book_obj = BookModel.objects.get(book_id=book_id)
        book_obj.delete()
        return Response({"message": "Book deleted successfully"}, status=status.HTTP_200_OK)
    except BookModel.DoesNotExist:
        return Response({'message': "Book not found"}, status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
def book_create(request):
    """
    Create a new book.

    Args:
        request: HttpRequest object containing data for the new book.

    Returns:
        Response: A JSON response containing the details of the newly created book.
                  Status code 201 (Created) if successful, 400 (Bad Request) if request data is invalid.
    """
    book_serializer_obj = BookSerializer(data=request.data)
    if book_serializer_obj.is_valid():
        book_serializer_obj.save()
        return Response(book_serializer_obj.data, status=status.HTTP_201_CREATED)
    return Response(book_serializer_obj.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
def update_book(request, book_id):
    """
    Update details of a book by its ID.

    Args:
        request: HttpRequest object containing updated data for the book.
        book_id (int): The ID of the book to update.

    Returns:
        Response: A JSON response containing the updated details of the book.
                  Status code 200 (OK) if successful, 400 (Bad Request) if request data is invalid,
                  404 (Not Found) if the book does not exist.
    """
    try:
        book_obj = BookModel.objects.get(book_id=book_id)
        book_serializer_obj = BookSerializer(instance=book_obj, data=request.data, partial=True)
        if book_serializer_obj.is_valid():
            book_serializer_obj.save()
            return Response(book_serializer_obj.data, status=status.HTTP_200_OK)
        return Response(book_serializer_obj.errors, status=status.HTTP_400_BAD_REQUEST)
    except BookModel.DoesNotExist:
        return Response({'message': "Book not found"}, status=status.HTTP_404_NOT_FOUND)
