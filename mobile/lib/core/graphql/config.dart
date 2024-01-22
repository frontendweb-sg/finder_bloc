import 'package:graphql_flutter/graphql_flutter.dart';
import 'package:mobile/core/constants/constants.dart';

class GraphQlConfig {
  static HttpLink httpLink = HttpLink(AppConstants.graphQLBaseUrl);
  GraphQLClient init() {
    return GraphQLClient(
      link: httpLink,
      cache: GraphQLCache(),
    );
  }
}
