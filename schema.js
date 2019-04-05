{
    "$id": "article-schema",
    "title": "Article",
    "properties": {
      "title": {
          "type": "string",
          "minLength": 3,
          "maxLength": 10
        },
        "date": {
          "type": "string",
          "format": "date-time"
        }
    }
}