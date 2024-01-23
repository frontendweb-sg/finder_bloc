import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:mobile/config/theme/colors.dart';
import 'package:mobile/config/theme/decoration.dart';
import 'package:mobile/config/theme/typography.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/business/usecases/login_usecase.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_bloc.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_event.dart';
import 'package:mobile/features/auth/presenter/bloc/auth_state.dart';
import 'package:mobile/features/jobs/presenter/pages/job_screen.dart';
import 'package:mobile/shared/widgets/button.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});
  @override
  State<StatefulWidget> createState() {
    return _LoginScreenState();
  }
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  MapData login = {"email": "", "password": ""};
  bool _visiblePassword = true;
  @override
  Widget build(BuildContext context) {
    void onLogin() {
      if (_formKey.currentState!.validate()) {
        _formKey.currentState!.save();

        context.read<AuthBloc>().add(
              AuthLogin(login),
            );
      }
    }

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

          return GestureDetector(
            onTap: () {
              FocusManager.instance.primaryFocus!.unfocus();
            },
            child: Container(
              width: double.infinity,
              height: double.infinity,
              padding: const EdgeInsets.all(25.0),
              alignment: Alignment.center,
              child: Form(
                key: _formKey,
                child: Column(
                  children: [
                    textHeadlineLarge(
                      context,
                      label: 'Login',
                      color: AppColor.colorPrimary,
                    ),
                    const SizedBox(
                      height: 50,
                    ),
                    TextFormField(
                      decoration: inputDecoration(
                        context,
                        hintText: 'Email address',
                        icon: Icons.email,
                      ),
                      initialValue: login['email'],
                      keyboardType: TextInputType.emailAddress,
                      textInputAction: TextInputAction.next,
                      onSaved: (value) {
                        login['email'] = value;
                      },
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Field is required!";
                        }
                        return null;
                      },
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    TextFormField(
                      decoration: inputDecoration(
                        context,
                        hintText: 'Password',
                        icon: Icons.key,
                        iconEnd: IconButton(
                          onPressed: () {
                            setState(() {
                              _visiblePassword = !_visiblePassword;
                            });
                          },
                          icon: Icon(_visiblePassword
                              ? Icons.visibility_off
                              : Icons.visibility),
                        ),
                      ),
                      obscureText: _visiblePassword,
                      initialValue: login['password'],
                      keyboardType: TextInputType.emailAddress,
                      textInputAction: TextInputAction.send,
                      onSaved: (value) {
                        login['password'] = value;
                      },
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return "Field is required!";
                        }
                        return null;
                      },
                    ),
                    const SizedBox(
                      height: 50,
                    ),
                    button(context, label: 'Login', onPressed: onLogin)
                  ],
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}
