import 'package:json_annotation/json_annotation.dart';
import 'package:mobile/core/utils/typedef.dart';
import 'package:mobile/features/auth/business/entities/user_entity.dart';

part 'user_model.g.dart';

@JsonSerializable()
class UserModel extends UserEntity {
  const UserModel({
    super.id,
    super.name,
    super.email,
    super.mobile,
    super.accessToken,
    super.active,
    super.emailVerified,
    super.expireIn,
    super.role,
  });

  factory UserModel.fromJson(Map<String, dynamic> json) =>
      _$UserModelFromJson(json);

  MapData toJson() => _$UserModelToJson(this);
}
