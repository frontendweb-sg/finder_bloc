import 'package:equatable/equatable.dart';

class JobEntity extends Equatable {
  final String? id;
  final String? title;
  final String? description;
  final String? createdAt;
  final bool? active;

  const JobEntity({
    this.id,
    this.title,
    this.description,
    this.createdAt,
    this.active,
  });

  @override
  List<Object?> get props => [
        id,
        title,
        description,
        createdAt,
        active,
      ];
}
