import 'package:dio/dio.dart';

class DioClient {
  late Dio _dio;

  DioClient() {
    _dio = Dio(
      BaseOptions(
        sendTimeout: const Duration(seconds: 5000),
        connectTimeout: const Duration(seconds: 5000),
        contentType: Headers.jsonContentType,
      ),
    );
  }

  Dio get client => _dio;
}
