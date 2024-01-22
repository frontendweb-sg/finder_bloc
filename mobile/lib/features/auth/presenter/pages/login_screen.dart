import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/features/auth/business/repos/auth_repo.dart';
import 'package:mobile/features/auth/business/usecases/login_usecase.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_bloc.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_event.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_state.dart';
import 'package:mobile/features/jobs/presenter/pages/job_screen.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});
  @override
  State<StatefulWidget> createState() {
    return _LoginScreenState();
  }
}

class _LoginScreenState extends State<LoginScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: BlocConsumer<AuthBloc, AuthState>(
        listener: (context, state) {
          if (state is AuthFailed) {
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text(state.failure.message)),
            );
          }

          if (state is AuthLoginSuccess) {
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(
                builder: (builder) => const JobScreen(),
              ),
            );
          }
        },
        builder: (context, state) {
          if (state is AuthLoading) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }

          return Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text("Login"),
                ElevatedButton(
                  onPressed: () {
                    context.read<AuthBloc>().add(
                          AuthLogin({
                            "email": 'pradeep.kumar5@rsystems',
                            "password": 'Admin123'
                          }),
                        );
                  },
                  child: const Text("Login"),
                )
              ],
            ),
          );
        },
      ),
    );
  }
}
