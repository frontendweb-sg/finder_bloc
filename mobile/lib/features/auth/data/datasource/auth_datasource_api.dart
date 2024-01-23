import 'package:dio/dio.dart';
import 'package:mobile/core/constants/constants.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/data/model/user_model.dart';
import 'package:retrofit/retrofit.dart';

part 'auth_datasource_api.g.dart';

@RestApi(baseUrl: AppConstants.baseUrl)
abstract class AuthDatasourceApi {
  factory AuthDatasourceApi(Dio dio) = _AuthDatasourceApi;

  ///
  /// Login handler
  @POST(AppConstants.loginUrl)
  Future<HttpResponse<UserModel>> login(@Body() MapData payload);

  ///
  /// Register handler
  @POST(AppConstants.registerUrl)
  Future<HttpResponse<void>> register(@Body() MapData payload);
}
