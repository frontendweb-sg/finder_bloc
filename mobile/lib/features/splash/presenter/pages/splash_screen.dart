import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:mobile/config/theme/colors.dart';
import 'package:mobile/config/theme/typography.dart';
import 'package:mobile/core/constants/images.dart';
import 'package:mobile/features/auth/presenter/pages/login_screen.dart';
import 'package:mobile/shared/widgets/button.dart';

///
/// Splash screen
///
class SplashScreen extends StatelessWidget {
  const SplashScreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: [
          PageView(
            children: [
              screenBuild(
                context,
                label: 'Find your dream job now',
                image: AppImage.svgBusiness,
                sublabel:
                    'Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              ),
              screenBuild(
                context,
                label: 'Find your dream job now',
                image: AppImage.svgPieChart,
                sublabel:
                    'Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              ),
              screenBuild(
                context,
                label: 'Find your dream job now',
                image: AppImage.svgInterview,
                sublabel:
                    'Lorem ipsum dolar sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
              ),
            ],
          ),
          Positioned(
            bottom: 25,
            left: 25,
            right: 25,
            child: button(
              context,
              label: 'Get started',
              onPressed: () {
                Navigator.of(context).pushReplacement(
                  MaterialPageRoute(
                    builder: (builder) => const LoginScreen(),
                  ),
                );
              },
            ),
          )
        ],
      ),
    );
  }

  Widget screenBuild(
    BuildContext context, {
    required String label,
    required String sublabel,
    required String image,
  }) {
    return Container(
      padding: const EdgeInsets.all(25.0),
      color: Colors.white,
      height: MediaQuery.of(context).size.height,
      width: MediaQuery.of(context).size.width,
      alignment: Alignment.center,
      child: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            image.endsWith(".svg")
                ? SvgPicture.asset(
                    image,
                    fit: BoxFit.contain,
                    width: 200,
                  )
                : Image.asset(image),
            const SizedBox(
              height: 55,
            ),
            textHeadlineLarge(
              context,
              label: label,
              color: AppColor.colorPrimary,
              textAlign: TextAlign.center,
            ),
            const SizedBox(
              height: 20.0,
            ),
            textBodyMedium(
              context,
              label: sublabel,
              textAlign: TextAlign.center,
            )
          ],
        ),
      ),
    );
  }
}
