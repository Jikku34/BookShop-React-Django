import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  fetchBooks();
}

void fetchBooks() async {
  final response = await http.get(Uri.parse('http://your-django-api-endpoint.com/allbook'));

  if (response.statusCode == 200) {
    // If the server returns a 200 OK response, parse the JSON
    List<dynamic> books = jsonDecode(response.body);

    // Process the list of books
    for (var book in books) {
      print('Title: ${book['title']}, Author: ${book['author']}');
    }
  } else {
    // If the server did not return a 200 OK response, throw an exception.
    throw Exception('Failed to load books');
  }
}
