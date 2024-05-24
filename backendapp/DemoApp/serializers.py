from rest_framework import serializers
from .models import BookModel

class BookSerializer(serializers.ModelSerializer):
    """
    Serializer for the BookModel.

    This serializer converts BookModel instances into JSON representations and vice versa.

    Attributes:
        model (BookModel): The model class that this serializer serializes.
        fields (list or str): The fields to include in the serialized output.
            If set to '__all__', all fields of the model will be included.

    Example Usage:
        To serialize a BookModel instance:

        ```
        book = BookModel.objects.get(id=1)
        serializer = BookSerializer(book)
        serialized_data = serializer.data
        ```

        To deserialize JSON data into a BookModel instance:

        ```
        data = {'title': 'Example Book', 'author': 'John Doe', 'genre': 'Fiction'}
        serializer = BookSerializer(data=data)
        if serializer.is_valid():
            book_instance = serializer.save()
        ```
    """
    class Meta:
        model = BookModel
        fields = '__all__'
