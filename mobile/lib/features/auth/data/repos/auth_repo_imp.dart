import 'dart:io';

import 'package:dartz/dartz.dart';
import 'package:dio/dio.dart';
import 'package:mobile/core/errors/failure.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/business/entities/user_entity.dart';
import 'package:mobile/features/auth/business/repos/auth_repo.dart';
import 'package:mobile/features/auth/data/datasource/auth_datasource_api.dart';

///
/// Auth repo implementation
/// 1. Login
/// 2. Register
class AuthRepoImp implements AuthRepo {
  final AuthDatasourceApi _api;
  AuthRepoImp(this._api);
  @override
  FutureResult<UserEntity> login(MapData param) async {
    try {
      print('repo $param');
      final httpRespose = await _api.login(param);

      if (httpRespose.response.statusCode == HttpStatus.ok) {
        return Right(httpRespose.data);
      }

      return Left(httpRespose.response.data);
    } on DioException catch (error) {
      return Left(Failure(message: error.message!, statusCode: 400));
    }
  }

  @override
  FutureResultVoid register(MapData param) async {
    throw UnimplementedError();
  }
}
