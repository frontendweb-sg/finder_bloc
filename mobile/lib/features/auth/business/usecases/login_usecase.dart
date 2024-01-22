import 'package:equatable/equatable.dart';
import 'package:mobile/core/usecases/usecase.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/business/entities/user_entity.dart';
import 'package:mobile/features/auth/business/repos/auth_repo.dart';

///
/// Login usecase
class LoginUseCase extends UseCase<UserEntity, LoginParam> {
  final AuthRepo _authRepo;
  LoginUseCase(this._authRepo);

  @override
  FutureResult<UserEntity> call(LoginParam params) async =>
      await _authRepo.login(params.toJson());
}

class LoginParam extends Equatable {
  final String email;
  final String password;

  const LoginParam({required this.email, required this.password});

  MapData toJson() => ({"email": email, "password": password});

  @override
  List<Object?> get props => [email, password];
}
