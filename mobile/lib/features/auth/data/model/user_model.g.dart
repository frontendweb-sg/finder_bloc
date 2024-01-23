// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user_model.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

UserModel _$UserModelFromJson(Map<String, dynamic> json) => UserModel(
      id: json['id'] as String?,
      name: json['name'] as String?,
      email: json['email'] as String?,
      mobile: json['mobile'] as String?,
      accessToken: json['accessToken'] as String?,
      active: json['active'] as bool?,
      emailVerified: json['emailVerified'] as bool?,
      expireIn: json['expireIn'] as int?,
      role: json['role'] as String?,
    );

Map<String, dynamic> _$UserModelToJson(UserModel instance) => <String, dynamic>{
      'id': instance.id,
      'name': instance.name,
      'email': instance.email,
      'mobile': instance.mobile,
      'accessToken': instance.accessToken,
      'active': instance.active,
      'emailVerified': instance.emailVerified,
      'role': instance.role,
      'expireIn': instance.expireIn,
    };
