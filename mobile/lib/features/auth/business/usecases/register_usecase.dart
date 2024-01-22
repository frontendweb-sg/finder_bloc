import 'package:equatable/equatable.dart';
import 'package:mobile/core/usecases/usecase.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/business/repos/auth_repo.dart';

///
/// Register usecase
///
class RegisterUseCase extends UseCase<void, RegisterParam> {
  final AuthRepo _authRepo;
  RegisterUseCase(this._authRepo);
  @override
  FutureResult<void> call(RegisterParam params) async =>
      await _authRepo.register(params.toJson());
}

class RegisterParam extends Equatable {
  final String name;
  final String email;
  final String password;
  final String mobile;
  final String? role;

  const RegisterParam({
    required this.name,
    required this.email,
    required this.password,
    required this.mobile,
    this.role = "user",
  });

  MapData toJson() => ({
        "name": name,
        "email": email,
        "password": password,
        "mobile": mobile,
        "role": role
      });

  @override
  List<Object?> get props => [
        name,
        email,
        password,
        mobile,
        role,
      ];
}
