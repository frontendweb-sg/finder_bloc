import 'package:json_annotation/json_annotation.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';

part 'job_model.g.dart';

@JsonSerializable()
class JobModel extends JobEntity {
  const JobModel({
    super.id,
    super.title,
    super.description,
    super.createdAt,
    super.active,
  });

  factory JobModel.fromJson(Map<String, dynamic> json) =>
      _$JobModelFromJson(json);

  Map<String, dynamic> toJson() => _$JobModelToJson(this);

  @override
  String toString() {
    return 'JobModel(id:$id,title:$title,description:$description,createdAt:$createdAt,active:$active)';
  }
}
