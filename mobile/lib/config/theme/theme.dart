import 'package:flutter/material.dart';
import 'package:mobile/config/theme/colors.dart';
import 'package:mobile/config/theme/fonts.dart';

ThemeData appTheme() {
  return ThemeData(
    colorScheme: ColorScheme.fromSeed(
      seedColor: AppColor.colorPrimary,
    ),
    useMaterial3: true,
    textTheme: textTheme(),
  );
}

TextTheme textTheme() {
  return TextTheme(
    headlineLarge: AppFont.fontFamily.copyWith(
      fontSize: AppFont.fontHeadingLarge,
    ),
  );
}
