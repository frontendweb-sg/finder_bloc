import 'package:mobile/core/errors/failure.dart';
import 'package:mobile/features/auth/business/entities/user_entity.dart';

abstract class AuthState {}

final class AuthInitial extends AuthState {}

final class AuthLoading extends AuthState {}

final class AuthLoginSuccess extends AuthState {
  final UserEntity userEntity;
  AuthLoginSuccess(this.userEntity);
}

final class AuthRegisterSuccess extends AuthState {}

final class AuthFailed extends AuthState {
  final Failure failure;
  AuthFailed(this.failure);
}
