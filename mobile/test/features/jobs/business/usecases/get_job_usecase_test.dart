import 'package:dartz/dartz.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/features/jobs/business/entities/job_entity.dart';
import 'package:mobile/features/jobs/business/usecases/get_job_usecase.dart';
import 'package:mockito/mockito.dart';

import '../../../../helpers/helper.mocks.dart';

void main() {
  late GetJobUseCase getJobUseCase;
  late MockJobRepo mockJobRepo;

  setUp(() {
    mockJobRepo = MockJobRepo();
    getJobUseCase = GetJobUseCase(mockJobRepo);
  });

  final jobTestData = JobEntity(
    active: false,
    createdAt: DateTime.now().toString(),
    title: 'Hello world',
    description: 'this is first post',
    id: '123',
  );

  test('should fetch data from server', () async {
    // arrange
    when(mockJobRepo.getJobs(QueryOptions(document: gql(r''''''))))
        .thenAnswer((realInvocation) async => Right([jobTestData]));
    // act
    final result =
        await getJobUseCase.call(params: QueryOptions(document: gql(r'''''')));
    // expect
    expect(result, right([jobTestData]));
  });
}
