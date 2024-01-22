import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/business/entities/user_entity.dart';

///
/// Auth repository
/// 1. Login
/// 2. Register
abstract class AuthRepo {
  FutureResult<UserEntity> login(Map<String, dynamic> payload);
  FutureResultVoid register(Map<String, dynamic> payload);
}
