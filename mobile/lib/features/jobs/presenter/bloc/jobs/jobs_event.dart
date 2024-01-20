import 'package:graphql_flutter/graphql_flutter.dart';

sealed class JobEvent {}

final class GetJobs extends JobEvent {
  final QueryOptions options;
  GetJobs(this.options);
}

final class AddJob extends JobEvent {}
