import 'package:equatable/equatable.dart';

///
/// Query params
class QueryParam extends Equatable {
  final String document;
  final Map<String, dynamic>? variables;

  const QueryParam({
    required this.document,
    this.variables = const {},
  });

  @override
  List<Object?> get props => [document, variables];
}

///
/// Mutation params
class MutationParam extends Equatable {
  final String document;
  final Map<String, dynamic> variables;
  const MutationParam({required this.document, this.variables = const {}});

  @override
  List<Object?> get props => [document, variables];
}
