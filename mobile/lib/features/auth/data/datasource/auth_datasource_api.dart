import 'package:dio/dio.dart';
import 'package:mobile/core/constants/constants.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/data/model/user_model.dart';
import 'package:retrofit/retrofit.dart';

part 'auth_datasource_api.g.dart';

@RestApi(baseUrl: AppConstants.baseUrl)
abstract class AuthDatasourceApi {
  factory AuthDatasourceApi(Dio dio) = _AuthDatasourceApi;

  @POST(AppConstants.loginUrl)
  Future<HttpResponse<UserModel>> login(MapData payload);

  @POST(AppConstants.registerUrl)
  Future<HttpResponse<void>> register(MapData payload);
}
