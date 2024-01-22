import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/core/errors/failure.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/business/entities/user_entity.dart';
import 'package:mobile/features/auth/business/repos/auth_repo.dart';
import 'package:mobile/features/auth/business/usecases/login_usecase.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_event.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_state.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final AuthRepo _authRepo;
  AuthBloc(this._authRepo) : super(AuthInitial()) {
    on<AuthLogin>(_authLogin);
    on<AuthRegister>(_authRegister);
  }

  ///
  /// Auth login
  void _authLogin(AuthLogin event, Emitter<AuthState> emit) async {
    try {
      emit(AuthLoading());
      print('event ${event.login}');
      MapData login = event.login;

      final result = await _authRepo.login(login);
      result.fold(
        (Failure error) => emit(AuthFailed(error)),
        (UserEntity data) => emit(AuthLoginSuccess(data)),
      );
      debugPrint('state----- $state');
    } on Failure catch (error) {
      emit(AuthFailed(error));
    }
  }

  /// Auth register
  ///
  void _authRegister(AuthRegister event, Emitter<AuthState> emit) {
    try {} on Failure catch (error) {
      emit(AuthFailed(error));
    }
  }

  @override
  void onChange(Change<AuthState> change) {
    super.onChange(change);
    debugPrint('onchange $change');
  }
}
