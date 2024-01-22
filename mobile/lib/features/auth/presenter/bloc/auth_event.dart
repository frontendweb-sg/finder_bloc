import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/business/usecases/register_usecase.dart';

sealed class AuthEvent {}

final class AuthLogin extends AuthEvent {
  AuthLogin(this.login);

  final MapData login;
}

final class AuthRegister extends AuthEvent {
  AuthRegister({required this.registerParam});

  final RegisterParam registerParam;
}
