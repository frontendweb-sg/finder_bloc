import 'package:equatable/equatable.dart';

///
/// Auth response entity
class UserEntity extends Equatable {
  final String? id;
  final String? name;
  final String? email;
  final String? mobile;
  final String? accessToken;
  final bool? active;
  final bool? emailVerified;
  final bool? role;
  final int? expireIn;

  const UserEntity({
    this.id,
    this.name,
    this.email,
    this.mobile,
    this.emailVerified,
    this.accessToken,
    this.active,
    this.role,
    this.expireIn,
  });

  @override
  List<Object?> get props => [
        id,
        name,
        email,
        mobile,
        emailVerified,
        accessToken,
        active,
        role,
        expireIn,
      ];
}
